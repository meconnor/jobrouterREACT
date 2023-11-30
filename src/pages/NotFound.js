import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Error 404: Page does not exist</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        recusandae doloribus qui molestias similique asperiores incidunt.
        Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore
        quia odio minus eligendi ipsa.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
