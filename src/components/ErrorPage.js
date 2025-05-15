import { useRouteError } from "react-router-dom";
import image from "../assets/img/9910414.jpg"
import '../components/style.css' 

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-page text-center">
      <h2>Better things are <span>coming soon</span>.</h2>
      <p>We're in the process of enhancing this page to serve you better.</p>
      
      <img src={image} className="d"/>
      <h4>
      Mima
      </h4>
    </div>
  );
}