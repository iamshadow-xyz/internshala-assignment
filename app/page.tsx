import SubmitButton from "@/components/submit-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <h1>Submit your feedback here</h1>
      <Card className="mt-5">
        <CardHeader className="border-b">
          <CardTitle>Submit your feedback</CardTitle>
          <CardDescription>please submit yout genuine feedback, how do you feel about our product, and what can we implement to improve 😊</CardDescription>
        </CardHeader>
        <form action="">
          <CardContent>
            <Input className="mb-4" placeholder="Enter your full name" />
            <Input className="mb-4" placeholder="Enter your email" />
            <Textarea className="mb-4" placeholder="please write you feedback here" />
          </CardContent>
          <CardFooter className="border-t">
            <SubmitButton text="Submit your feedback" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
