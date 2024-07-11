export const Data = {
    authorsData: [
      {
        name: "author1",
        birth_year: 2001,
        nationality: "india",
      },
      {
        name: "author2",
        birth_year: 2002,
        nationality: "china",
      },
      {
        name: "author3",
        birth_year: 2003,
        nationality: "USA",
      },
      {
        name: "author4",
        birth_year: 2004,
        nationality: "austrelia",
      },
      {
        name: "author5",
        birth_year: 2005,
        nationality: "japan",
      },
    ],
    booksData: [
      {
        title: "book1",
        authoId: 2,
        genre: "gen1",
        isbn: "isbn1",
        publication_year: 2000,
      },
      {
        title: "book2",
        authoId: 3,
        genre: "gen2",
        isbn: "isbn2",
        publication_year: 2001,
      },
      {
        title: "book3",
        authoId: 3,
        genre: "gen3",
        isbn: "isbn3",
        publication_year: 2002,
      },
      {
        title: "book4",
        authoId: 2,
        genre: "gen4",
        isbn: "isbn4",
        publication_year: 2003,
      },
      {
        title: "book5",
        authoId: 1,
        genre: "gen5",
        isbn: "isbn5",
        publication_year: 2004,
      },
    ],
    loansData: [
      {
        book_id: 2,
        member_id: 2,
        loan_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
      },
      {
        book_id: 1,
        member_id: 3,
        loan_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
      },
      {
        book_id: 4,
        member_id: 4,
        loan_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
      },
      {
        book_id: 3,
        member_id: 5,
        loan_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
      },
      {
        book_id: 5,
        member_id: 1,
        loan_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
      },
    ],
    memberData: [
      {
        name: "keerthi",
        address: "add1",
        phone_number: "12345678902",
        email: "keerthi@example.com",
      },
  
      {
        name: "junnu",
        address: "add2",
        phone_number: "09876543215",
        email: "junnu@example.com",
      },
  
      {
        name: "jhon",
        address: "add3",
        phone_number: "12345673290",
        email: "jhon@example.com",
      },
  
      {
        name: "naveen",
        address: "add4",
        phone_number: "098765432121",
        email: "naveen@example.com",
      },
  
      {
        name: "advaith",
        address: "add5",
        phone_number: "57597294758",
        email: "advaith@example.com",
      },
    ],
    reservationData: [
      { book_id: 3, member_id: 2, reservation_date: new Date() },
      { book_id: 4, member_id: 1, reservation_date: new Date() },
      { book_id: 5, member_id: 3, reservation_date: new Date() },
      { book_id: 1, member_id: 5, reservation_date: new Date() },
      { book_id: 2, member_id: 4, reservation_date: new Date() },
    ],
  };