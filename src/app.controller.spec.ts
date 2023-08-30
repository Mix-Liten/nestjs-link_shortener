import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppRepositoryTag } from './app.repository'
import { AppRepositoryHashmap } from './app.repository.hashmap'
import { tap } from 'rxjs'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, { provide: AppRepositoryTag, useClass: AppRepositoryHashmap }],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })

  describe('shorten', () => {
    it('should return a valid string', done => {
      const url = 'test.com'
      appController
        .shorten(url)
        .pipe(tap(hash => expect(hash).toBeTruthy()))
        .subscribe({ complete: done })
    })
  })
})
