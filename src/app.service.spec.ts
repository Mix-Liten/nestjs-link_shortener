import { mergeMap, tap } from 'rxjs'
import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'
import { AppRepositoryTag } from './app.repository'
import { AppRepositoryHashmap } from './app.repository.hashmap'

describe('AppService', () => {
  let appService: AppService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService, { provide: AppRepositoryTag, useClass: AppRepositoryHashmap }],
    }).compile()

    appService = app.get<AppService>(AppService)
  })

  describe('retrieve', () => {
    it('should retrieve the saved URL', done => {
      const url = 'test.com'
      appService
        .shorten(url)
        .pipe(mergeMap(hash => appService.retrieve(hash)))
        .pipe(tap(retrieved => expect(retrieved).toEqual(url)))
        .subscribe({ complete: done })
    })
  })
})
