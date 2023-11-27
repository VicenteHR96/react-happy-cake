import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contacto = () => {
  return (
    <div className="container-contacto">
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="vicente@happycake.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="danger">Enviar</Button>
    </div>
  );
};

export default Contacto;
