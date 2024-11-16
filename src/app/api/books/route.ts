// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export type Book = {
//   id: number;
//   title: string;
//   desc: string;
//   author: string;
//   available: boolean;
//   image: string;
// };
// const books: Book[] =[
//     {
//       id: 1,
//       title: "The Catalyzer",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//       author: "The Catalyzer",
//       available: true,
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//         id: 2,
//         title: "The 400 Blows",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "The 400 Blows",
//         available: true,
//         image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
//       },
//       {
//         id: 3,
//         title: "Shoting Star",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Jane Austen",
//         available: false,
//         image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 4,
//         title: "Novel",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "F. Scott Fitzgerald",
//         available: true,
//         image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
//       },
//       {
//         id: 5,
//         title: "Pussybell",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Gabriel García Márquez",
//         available: true,
//         image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 6,
//         title: "Dark Tree",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "J.D. Salinger",
//         available: false,
//         image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 7,
//         title: "Look Books",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Aldous Huxley",
//         available: true,
//         image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
//       },
//       {
//         id: 8,
//         title: "Look Back",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "J.R.R. Tolkien",
//         available: true,
//         image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 9,
//         title: "Bike guy",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "J.R.R. Tolkien",
//         available: false,
//         image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 10,
//         title: "Book Bover",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "C.S. Lewis",
//         available: true,
//         image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 11,
//         title: "The 400 Blows",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Douglas Adams",
//         available: true,
//         image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 12,
//         title: "Beauty tips",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Dan Brown",
//         available: false,
//         image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 13,
//         title: "Open Eyes",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Suzanne Collins",
//         available: true,
//         image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 14,
//         title: "Success in path",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Paulo Coelho",
//         available: true,
//         image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//       {
//         id: 15,
//         title: "Education",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit! Tenetur, excepturi. Delectus placeat labore laborum fuga expedita dolore assumenda, commodi, natus amet perspiciatis cum eligendi officiis ducimus doloribus distinctio.",
//         author: "Khaled Hosseini",
//         available: false,
//         image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
//       },
//     ]

// export function getBooks(): Book[] {
//   return books;
// }

// export async function GET() {
//   return NextResponse.json(books);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const newBook: Book = await request.json();
//     books.push(newBook);
//     return NextResponse.json({ message: "Book added successfully", book: newBook }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: `Failed to add book: ${error}` }, { status: 500 });
//   }
// }

// export async function PUT(request: NextRequest) {
//   try {
//     const updatedBook: Partial<Book> = await request.json();
//     const bookIndex = books.findIndex(book => book.id === updatedBook.id);

//     if (bookIndex === -1) {
//       return NextResponse.json({ message: "Book not found" }, { status: 404 });
//     }

//     books[bookIndex] = { ...books[bookIndex], ...updatedBook };
//     return NextResponse.json({ message: "Book updated successfully", book: books[bookIndex] });
//   } catch (error) {
//     return NextResponse.json({ message: `Failed to update book: ${error}` }, { status: 500 });
//   }
// }

// export async function DELETE(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json({ message: "Book ID is required" }, { status: 400 });
//     }

//     const bookIndex = books.findIndex(book => book.id === parseInt(id));

//     if (bookIndex === -1) {
//       return NextResponse.json({ message: "Book not found" }, { status: 404 });
//     }

//     const deletedBook = books.splice(bookIndex, 1)[0];
//     return NextResponse.json({ message: "Book deleted successfully", book: deletedBook });
//   } catch (error) {
//     return NextResponse.json({ message: `Failed to delete book: ${error}` }, { status: 500 });
//   }
// }
