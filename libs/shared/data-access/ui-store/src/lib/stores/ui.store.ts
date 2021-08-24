import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { ImmerComponentStore } from 'ngrx-immer/component-store'
import { tap } from 'rxjs/operators'
import { NavItem } from '@xact-checkout/shared/data-access/models'
import { UiIcon } from '@xact-checkout/shared/ui/icon'

type UiTheme = 'dark' | 'light'

interface UiState {
  theme: UiTheme,
  navItems: NavItem[]
}

const LS_THEME_KEY = '@@CHECKOUT/theme'

@Injectable({ providedIn: 'root' })
export class UiStore extends ImmerComponentStore<UiState> {
  private readonly body: HTMLElement

  constructor(@Inject(DOCUMENT) private document: Document) {
    super({
      theme: 'dark',
      navItems: [],
    })
    this.body = this.document.body
    this.initializeEffect()
    this.toggleThemeEffect(this.select((state) => state.theme))
  }

  readonly navItems$ = this.select((s) => s.navItems)

  readonly vm$ = this.select(({
                                theme,
                                navItems,
                              }) => ({
    theme,
    navItems,
    icon: theme === 'dark' ? UiIcon.sun : UiIcon.moon,
  }))

  readonly initializeEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        const savedTheme = localStorage.getItem(LS_THEME_KEY)
        if (savedTheme) {
          this.patchState({ theme: savedTheme as UiTheme })
        }
      }),
    ),
  )

  readonly toggleTheme = this.updater((state) => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
  })


  private readonly toggleThemeEffect = this.effect<UiTheme>((theme$) =>
    theme$.pipe(
      tap((theme: UiTheme) => {
        localStorage.setItem(LS_THEME_KEY, theme)
        this.body.classList.remove('dark', 'light')
        this.body.classList.add(theme)
      }),
    ),
  )
}
