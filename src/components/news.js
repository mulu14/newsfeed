import React from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";
function News(props) {
  return (
    <Card body>
      <CardTitle tag="h5">
        {props.index + 1}. <a href={props.newslink}>{props.title}</a>
      </CardTitle>
      <CardText>{props.publishDate}</CardText>
      <Button>Läs mer på : {props.domain}</Button>
    </Card>
  );
}

export default News;
