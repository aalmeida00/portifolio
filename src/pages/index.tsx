import Avatar from "@/components/Avatar";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-8">
        <Title tag="h2">
          Andre<br /> 
          Almeida
        </Title>
        <Avatar 
          src="/avatar.jpg"
          size="large"
        />
      </div>
    </main>
  )
}
