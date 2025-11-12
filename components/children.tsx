import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Children = ({
  childrenData,
}: {
  childrenData: {
    id: string;
    name: string;
    current_rewards: number;
    lifetime_rewards: number;
  }[];
}) => {
  return (
    <div className='flex flex-wrap gap-2 justify-start'>
      {childrenData.map((child) => (
        <Card key={child.id} className='w-full sm:max-w-md'>
          <CardHeader>
            <CardTitle>{child.name}</CardTitle>
            <CardDescription>
              All work and no play makes Jack a dull boy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Child ID: {child.id}</p>
            <p>Unspent Rewards: {child.current_rewards}</p>
            <p>Lifetime Earnings: {child.lifetime_rewards}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Children;
