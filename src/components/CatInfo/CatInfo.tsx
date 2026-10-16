// import type { Cat } from "../../types/cat";

import { type Cat } from "../../types/cat";

interface CatInfoProps {
  cat: Cat;
}

function CatInfo({ cat }: CatInfoProps) {
  //   console.log(props);
  const { name, image } = cat;

  return (
    <div>
      <img src={image} width="400px" height="300px" alt={name} />
      <h3>{name}</h3>
      <p>{cat.email}</p>
      <p>
        Age: <strong>{cat.age}</strong>
      </p>
      <p>
        Available: <strong>{cat.available ? "Yes" : "No"}</strong>
      </p>
    </div>
  );
}

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

export default CatInfo;
