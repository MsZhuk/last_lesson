import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";

test.describe("API challenge", () => {
    let URL = "https://apichallenges.herokuapp.com/";
    let token;
    let id;
    let firstId;
    let secondId;
    let payload;
  
    test.beforeAll(async ({ request }) => {
      let response = await request.post(`${URL}challenger`);
      let headers = response.headers();
      token = headers["x-challenger"];
    
      expect(headers).toEqual(
        expect.objectContaining({ "x-challenger": expect.any(String) }),
      );
    });
  
    test("Получить список заданий GET /challenges (200) @GET", async ({ request }) => {
      let response = await request.get(`${URL}challenges`, {
        headers: {
          "x-challenger": token,
        },
      });
      let body = await response.json();
      let headers = await response.headers();
  
      expect(response.status()).toBe(200);
      expect(headers).toEqual(expect.objectContaining({ 'x-challenger': token}));
      expect(body.challenges.length).toBe(59);
  
    });

    test("Выполнить запрос GET /todos @GET", async ({ request }) => {
        let response = await request.get(`${URL}todos`, {
          headers: {
            "x-challenger": token,
          },
        });
        let body = await response.json();
        let headers = await response.headers();
        id = body.todos[0].id;
    
        expect(response.status()).toBe(200);
        expect(headers).toEqual(expect.objectContaining({ 'x-challenger': token}));
        expect(body.todos.length).toBe(10);
    
      });

      test("Вернуть определенную задачу GET /todos/{id} @GET", async ({ request }) => {
        let response = await request.get(`${URL}todos/${id}`, {
          headers: {
            "x-challenger": token,
          },
        });
    
        let headers = await response.headers();
    
        expect(response.status()).toBe(200);
        expect(headers).toEqual(expect.objectContaining({ 'x-challenger': token}));
     
      });

      test("Создание задачи POST /todos @POST", async ({ request }) => {
        let response = await request.post(`${URL}todos`, {
          headers: {
            "x-challenger": token,
          },
          data: {
            title: faker.person.bio(),
            doneStatus: true,
            description: faker.person.bio()
          }
        });
        
        let headers = await response.headers();
        let body = await response.json();
        firstId = body.id;
      
        expect(response.status()).toBe(201);
        expect(headers).toEqual(expect.objectContaining({ 'x-challenger': token}));
        expect(body).toEqual(expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          doneStatus: true,
          description: expect.any(String)
        }));
    
      });


      test("Обновление задачи POST /todos @POST", async ({ request }) => {
        let response = await request.post(`${URL}todos/${firstId}`, {
          headers: {
            "x-challenger": token,
          },
          data: {
            title: faker.person.bio()
          }
        });
       
        let headers = await response.headers();
      
        expect(response.status()).toBe(200);
        expect(headers).toEqual(expect.objectContaining({ 'x-challenger': token}));
    
      });

});
