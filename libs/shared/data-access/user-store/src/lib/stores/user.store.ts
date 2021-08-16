import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { ImmerComponentStore } from 'ngrx-immer/component-store'
import { tap } from 'rxjs/operators'
import { tapResponse } from '@ngrx/component-store'
import { UserAccount } from '@xact-wallet-sdk/client'

interface UiState {
  user: UserAccount | null;
}

const LS_USER_KEY = '@@CHECKOUT/user'

@Injectable({ providedIn: 'root' })
export class UserStore extends ImmerComponentStore<UiState> {
  private readonly body: HTMLElement

  constructor(@Inject(DOCUMENT) private document: Document) {
    super({
      user: null,
    })
    this.body = this.document.body
    this.initializeEffect()
  }

  readonly user$ = this.select((s) => s.user)

  readonly vm$ = this.select(({
                                user,
                              }) => ({
    user,
  }))

  readonly initializeEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        const userStorage = localStorage.getItem(LS_USER_KEY)
        if (userStorage) {
          const user = JSON.parse(userStorage)
          this.patchState({ user: user as UserAccount })
        }
      }),
    ),
  )

  readonly updateUser = this.updater<UserAccount | null>((state, user) => {
    state.user = user
  })

  readonly setUserEffect = this.effect<UserAccount>((user$) =>
    user$.pipe(
      tapResponse((user: UserAccount) => {
        this.updateUser(user)
        localStorage.setItem(LS_USER_KEY, JSON.stringify(user))
      }, console.error),
    ),
  )

  readonly clearUserEffect = this.effect(($) =>
    $.pipe(
      tapResponse(() => {
        this.updateUser(null)
        localStorage.removeItem(LS_USER_KEY)
      }, console.error),
    ),
  )
}
