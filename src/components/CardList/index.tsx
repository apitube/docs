import React from "react";
import CardListItem, { CardItem } from "./CardListItem";

interface CardListProps {
  items: CardItem[];
  columnSize?: 6;
}

export default function CardList(props: CardListProps): JSX.Element {
  const { items, columnSize } = props;

  return (
    <section className="row">

      {items.map((item, index) => (
          <article key={index} className={`col col--${columnSize} margin-bottom--lg`}>
          <CardListItem item={item} />
        </article>
      ))}
    </section>
  );
}
