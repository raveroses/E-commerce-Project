export default function SideContent({ onClick, categories }) {
  const Plist = [
    {
      name: "beauty",
      id: 1,
    },
    {
      name: "fragrances",
      id: 2,
    },
    {
      name: "groceries",
      id: 3,
    },
    {
      name: "laptops",
      id: 4,
    },
    {
      name: "sunglasses",
      id: 5,
    },
    {
      name: "tops ",
      id: 6,
    },
    {
      name: "smartphones",
      id: 7,
    },
    {
      name: "womens-jewellery",
      id: 8,
    },
    {
      name: "furniture",
      id: 9,
    },
    {
      name: "mens-shoes",
      id: 10,
    },
  ];

  return (
    <div className="a-list">
      <ul>
        {Plist.map((item) => (
          <li key={item.id} onClick={() => onClick(item.name)}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
