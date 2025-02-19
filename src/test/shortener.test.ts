import { randomUUID } from 'crypto';
import request from 'supertest';
import ShortnerRoute from '@routes/shortener.route';
import { App } from '@/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Shortener', () => {
  describe('should create short link for the given URL', () => {
    it('response should have the short link', async () => {
      const shortenerRoute = new ShortnerRoute();
      const shortenerService = shortenerRoute.shortener.shortenerService;

      shortenerService.createShortLink = jest.fn().mockReturnValue({
        shortCode: `1`,
      });

      const app = new App([shortenerRoute]);
      return request(app.getServer()).post(`${shortenerRoute.path}`).send({ url: 'https://www.google.com' }).expect({
        shortLink: `${process.env.FRONTEND_URL}/1`,
      });
    });
    it('should respond with 400 if there is no url present', async () => {
      const shortenerRoute = new ShortnerRoute();
      const shortenerService = shortenerRoute.shortener.shortenerService;

      shortenerService.createShortLink = jest.fn().mockReturnValue({
        message: "URL is required"
      });

      const app = new App([shortenerRoute]);
      return request(app.getServer()).post(`${shortenerRoute.path}`).send({ url: null }).expect({
        message: "URL is required"
      });
    });
  });
});
