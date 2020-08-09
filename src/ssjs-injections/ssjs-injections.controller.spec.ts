import { Test, TestingModule } from '@nestjs/testing';
import { SsjsInjectionsController } from './ssjs-injections.controller';

describe('SsjsInjections Controller', () => {
  let controller: SsjsInjectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsjsInjectionsController],
    }).compile();

    controller = module.get<SsjsInjectionsController>(SsjsInjectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
