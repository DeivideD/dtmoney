import { Container } from "./style";

interface Props {
  title: string;
  image: string;
  value: number;
  className?: boolean;
}

export function Summary(props: Props) {
  return (
    <>
      <Container>
        <div className={props.className ? "diferent" : ""}>
          <header>
            <p>{ props.title }</p>
            <span> <img src={props.image} /></span>
          </header>
          <strong>R${props.value }</strong>
        </div>
      </Container>
    </>
  );
}