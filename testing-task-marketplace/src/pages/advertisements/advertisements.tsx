import { useEffect, useState } from "react";
import getAllAdvertisements from "../../api/getAllAdvertisements";
import Card from "../../components/card/card";
import { Advertisment } from "../../types";

export function Advertisements() {
  const [cardInfo, setCardInfo] = useState<Advertisment[]>([]);

  useEffect(() => {
    getAllAdvertisements()
      .then(
        function (response) {
          if (response) {
            setCardInfo(response);
          } else {
            setCardInfo([]);
          }
        }
      )
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => { });


  }, []);

  const add = () => {
    fetch('http://localhost:8000/advertisements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "name": "Новый товар",
        "price": 100,
        "createdAt": "2024-08-12T12:16:55.351Z",
        "views": 200,
        "likes": 300,
        "imageUrl": ""
      })
    });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: '8px' }}>
      {
        cardInfo.map((item: Advertisment) => <Card key={item.id} {...item} />)
      }
      <button onClick={add}>add</button>
    </div>
  )
}