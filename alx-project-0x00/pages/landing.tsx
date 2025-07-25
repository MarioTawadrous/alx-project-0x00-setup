import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight "> Landing Page</h1>
      <Card />
      <Button title="Small" styles="rounded-sm" />
      <Button title="Medium" styles="rounded-md" />
      <Button title="Medium" styles="rounded-lg" />
      <Button title="Large" styles="rounded-full" />
    </div>
  );
};

export default Landing;
