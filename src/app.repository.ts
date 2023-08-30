import { Observable } from 'rxjs'

export interface AppRepository {
  get(hash: string): Observable<string>
  put(hash: string, url: string): Observable<string>
}

export const AppRepositoryTag = 'AppRepository'
