export interface Response<T> {
  'page': number
  'per_page': number
  'total': number
  'total_pages': number
  'data': T
  'support': {
    'url': string
    'text': string
  }
}

export interface EditResponse extends User {
  'updatedAt': string
}

export interface User {
  'id': number
  'email': string
  'first_name': string
  'last_name': string
  'avatar': string
}

export type UserResponse = Pick<Response<User>, 'data' | 'support'>
