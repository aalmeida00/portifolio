import Avatar from "@/components/Avatar";
import Title from "@/components/Title";
import Span from "@/components/Span";

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-8 max-w-screen-lg">
        <section className="flex gap-4 flex-col flex-1">
          <Title tag="h2">
            Andre<br />
            Almeida
          </Title>
          <Span>A brief introduction about me</Span>

          <p>
            My name is Andre Almeida, i`m a Senior Software Engineer working currently at
            <a href="https://foxbit.com.br/" target="_blank">Foxbit</a>. Mostly working as a
            Champion Frontend Engineer, working on our core product and some side products like our International Exchange called <a href="https://pro.foxbit.com/" target="_blank">PRO</a>.
          </p>
        </section>

        <Avatar
          src="/avatar.jpg"
          size="large"
        />
      </div>
    </main>
  )
}
