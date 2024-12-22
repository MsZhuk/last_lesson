import { fa, faker } from '@faker-js/faker';

export class UserBuilder {
  addComment(){
    this.testComment = faker.lorem.text();
    return this;
  };
  addAuthor(){
    this.testAuhor = faker.person.firstName();
    return this;
  };

  addEmail(){
    this.testEmail = faker.internet.email();
    return this;
  };

  generate() {
    const copied = structuredClone (
      {
      testComment : this.testComment,
      testAuhor : this.testAuhor,
      testEmail : this.testEmail
    }
    )
    return copied;
  }

}

