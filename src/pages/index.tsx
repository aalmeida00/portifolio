import Avatar from "@/components/Avatar";
import Title from "@/components/Title";
import Span from "@/components/Span";
import Anchor from "@/components/Anchor";

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
            My name is Andre Almeida, i`m a Senior Software Engineer working currently at <Anchor href="https://foxbit.com.br/" target="_blank">Foxbit</Anchor>. Mostly working as a
            Champion Frontend Engineer, working on our core product and some side products like our International Exchange called <Anchor href="https://pro.foxbit.com/" target="_blank">PRO</Anchor>.
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
