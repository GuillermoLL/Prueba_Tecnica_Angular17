import { HttpInterceptorFn } from '@angular/common/http'

export const AppInterceptor: HttpInterceptorFn = (req, next) => {
  const requestWithApiKey = req.clone({
    headers: req.headers.set('x-api-key', 'reqres-free-v1')
  })

  return next(requestWithApiKey)
}
