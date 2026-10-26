import { useState } from "react"; //використовуємо хук який називається useState, всі хути в react починаються з "use"

// import type { Cat } from "../../types/cat";

// import { type Cat } from "../../types/cat";

// interface CatInfoProps {
//   cat: Cat;
// }

// function CatInfo({ cat }: CatInfoProps) {
//   //   console.log(props);
//   const { name, image } = cat;

//   return (
//     <div>
//       <img src={image} width="400px" height="300px" alt={name} />
//       <h3>{name}</h3>
//       <p>{cat.email}</p>
//       <p>
//         Age: <strong>{cat.age}</strong>
//       </p>
//       <p>
//         Available: <strong>{cat.available ? "Yes" : "No"}</strong>
//       </p>
//     </div>
//   );
// }

// function CatInfo({ cat: { name, image } }: CatInfoProps) {
//   //   console.log(props);

//   return (
//     <div>
//       <img src={image} width="400px" height="300px" alt={name} />
//       <h3>{name}</h3>
//       <p>{cat.email}</p>
//       <p>
//         Age: <strong>{cat.age}</strong>
//       </p>
//       <p>
//         Available: <strong>{cat.available ? "Yes" : "No"}</strong>
//       </p>
//     </div>
//   );
// }

// function CatInfo({ cat }: CatInfoProps) {
//   //   console.log(props);

//   return (
//     <div>
//       <img src={cat.image} width="400px" height="300px" alt={cat.name} />
//       <h3>{cat.name}</h3>
//       <p>{cat.email}</p>
//       <p>
//         Age: <strong>{cat.age}</strong>
//       </p>
//       <p>
//         Available: <strong>{cat.available ? "Yes" : "No"}</strong>
//       </p>
//     </div>
//   );
// }

// interface CatInfoProps {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   image: string;
//   available: boolean;
// }

// function CatInfo({ name, email, age, image, available }: CatInfoProps) {
//   //   console.log(props);

//   return (
//     <div>
//       <img src={image} width="400px" height="300px" alt={name} />
//       <h3>{name}</h3>
//       <p>{email}</p>
//       <p>
//         Age: <strong>{age}</strong>
//       </p>
//       <p>
//         Available: <strong>{available ? "Yes" : "No"}</strong>
//       </p>
//     </div>
//   );
// }

// function CatInfo(props: CatInfoProps) {
//   //   console.log(props);

//   return (
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>{props.name}</h3>
//       <p>{props.email}</p>
//       <p>
//         Age: <strong>{props.age}</strong>
//       </p>
//       <p>
//         Available: <strong>Yes</strong>
//       </p>
//     </div>
//   );
// }

interface CatInfoProps {
  name: string;
  email: string;
  age: number;
  isAvailable: boolean;
}

// function CatInfo({ name, age, isAvailable }: CatInfoProps) {
//   return (
//     <div>
//       <img src="https://placekitten.com/400/400" width="400px" alt="Cat" />
//       <h2>Whiskers</h2>
//       <p>This is a cat</p>
//       <p>Age: 2</p>
//       <p>Email: whiskers@cat.com</p>
//       <p>Available for adoption: Yes</p>
//     </div>
//   );
// }

function CatInfo({ name, email, age, isAvailable }: CatInfoProps) {
  const [like, setLike] = useState<number>(0); // другим аргументом буде спеціальна функція (метод) яка буде змінювати значення нашого стану, як правило починається з приставки "set" - задати;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>, action: "like" | "dislike") => {
  //   console.log("Click");
  // };

  // let like = 0; // в react локальні змінні не працюють
  // let dislike = 0; // в react локальні змінні не працюють

  const handleClick = (action: "like" | "dislike") => {
    console.log(`You made ${action} action`);
  };

  const handleModalClose = () => {};

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ event });
    console.log("You liked me");

    // like += 1;
    // console.log(like);

    // В цьому випадку like в нас одразу не змінюється, в данному випадку для першого кліку в setLike 5 разів пердаємо 1
    // Якщо потрібно пердати якесь конкретне значення використовуємо setLike(like + 1);, в цю функцію для зміни стану пердаю якесь значення. Наприклад якщо в нас є стан для модального вікна  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); і відповідно наприклад є якийсь обробник є якась кнопочка при натисканні на яку я маю модальне вікно закрити.
    setLike(like + 1);
    setLike(like + 1);
    setLike(like + 1);
    setLike(like + 1);
    setLike(like + 1);

    // В цьому випадку в setLike пердається функція, тут така особливість що ця функція буде викликатися в момент коли react буде робити оновлення стану. Наше початкове значення 0, відповідно react хоче зробити оновлення, prevLike = 0; 0 + 1 = 1; в like записалася 1. Коли react готовий зробити оновлення на наступний раз, він знову викликає функцію setLike((prevLike) => prevLike + 1);, але тепер в нас prevLike = 1; 1 + 1 = 2;. Ці 5 функцій не будуть викликатися коли ми робимо setLike, ці функції будуть викликатися коли react вже готовий безпосередньо змінити значення нашого стану. React послідовно виконує ці 5 функцій, але це відбувається дуже швидко тому а UI ми бачимо 5(крок +5 +5 +5 +5).
    setLike((prevLike) => prevLike + 1);
    setLike((prevLike) => prevLike + 1);
    setLike((prevLike) => prevLike + 1);
    setLike((prevLike) => prevLike + 1);
    setLike((prevLike) => prevLike + 1);

    // setLike((prevLike) => prevLike + 1); // вираховувати нове значення на основі попереднього значення
    // setLike((prevLike) => prevLike + 1);
    // setLike((prevLike) => prevLike + 1);
    // setLike((prevLike) => prevLike + 1);
    // setLike((prevLike) => prevLike + 1);

    // setLike(100); // що в кажемо те і виведеться на екран;
    // setLike(like + 1); // ми просимо у react збільшити значення like на 1, react не відразу виконує код
    // setLike(like + 1);
    // setLike(like + 1);
    // setLike(like + 1);
    // setLike(like + 1);
    console.log(like);
  };

  const hendleDislikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("You disliked me:(");

    // dislike += 1;
    // console.log(dislike);
  };

  return (
    <div>
      <img src="https://placekitten.com/400/400" width="400px" alt="Cat" />
      <h2>{name}</h2>
      <p>This is a cat</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Available for adoption: {isAvailable ? "Yes" : "No"}</p>
      {/* <button onClick={handleLikeClick}>Like</button> */}
      {/* <button onClick={hendleDislikeClick}>Dislike</button> */}
      <button onClick={handleLikeClick}>({like}) Like</button>
      {/* <button onClick={hendleDislikeClick}>({dislike}) Dislike</button> */}
      {/* <button onClick={handleLikeClick("like")}>Like</button> - так робити не можна в onClick повертається undefined */}
      {/* <button onClick={hendleDislikeClick("dislike")}>Dislike</button> - так робити не можна в onClick повертається undefined */}
      {/* <button onClick={() => console.log("You liked me")}>Like</button> */}
      {/* <button onClick={() => console.log("You dislike me:(")}>Dislike</button> */}
      {/* <button onClick={handleClick}>Like</button> */}
      {/* <button onClick={handleClick}>Dislike</button> */}
      {/* <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(event, "like")
        }
      >
        Like
      </button> */}
      {/* <button onClick={() => handleClick("like")}>Like</button>
      <button onClick={() => handleClick("dislike")}>Dislike</button> */}
    </div>
  );
}

export default CatInfo;
