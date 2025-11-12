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
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm'>Child ID: {child.id}</p>
            <p className='text-sm'>Unspent Rewards: {child.current_rewards}</p>
            <p className='text-sm'>
              Lifetime Earnings: {child.lifetime_rewards}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Children;
