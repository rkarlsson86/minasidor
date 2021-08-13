import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { ImmerComponentStore } from 'ngrx-immer/component-store'
import { tap } from 'rxjs/operators'
import { User } from '@xact-checkout/shared/data-access/models'
import { tapResponse } from '@ngrx/component-store'

interface UiState {
  user: User | null;
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
          this.patchState({ user: user as User })
        }
      }),
    ),
  )

  readonly updateUser = this.updater<User>((state, user) => {
    state.user = user
  })

  readonly setUserEffect = this.effect<User>((user$) =>
    user$.pipe(
      tapResponse((user: User) => {
        this.updateUser(user)
        localStorage.setItem(LS_USER_KEY, JSON.stringify(user))
      }, console.error),
    ),
  )
}
