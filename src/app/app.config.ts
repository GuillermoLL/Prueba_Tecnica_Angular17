import { ApplicationConfig } from '@angular/core'
import { provideRouter, Routes } from '@angular/router'

const routes: Routes = []

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
