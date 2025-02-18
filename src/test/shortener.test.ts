import { randomUUID } from 'crypto';
import request from 'supertest';
import ShortnerRoute from '@routes/shortener.route';
import { App } from '@/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Shortener', () => {
  describe('should create short link for the given URL', () => {
    // it('generate a code for the short link', async () => {
    //   const shortenerRoute = new ShortnerRoute();
    //   const shortenerService = shortenerRoute.shortener.shortenerService;
    //   const url = 'https://www.google.com';

    //   shortenerService.generateShortLink = jest.fn().mockReturnValue('abc123');

    //   const shortLink = await shortenerService.createShortLink(url);
    //   expect(shortLink).toBe('abc123');
    // });
    it('response should have the Create short link', async () => {
      const shortenerRoute = new ShortnerRoute();
      const shortenerService = shortenerRoute.shortener.shortenerService;

      shortenerService.createShortLink = jest.fn().mockReturnValue({
        id: randomUUID(),
        url: 'https://www.google.com',
        shortLink: 'http://localhost:3000/1',
      });

      const app = new App([shortenerRoute]);
      return request(app.getServer()).post(`${shortenerRoute.path}`).send({ url: 'https://www.google.com' }).expect({
        shortLink: 'http://localhost:3000/1',
      });
    });
  });
});
