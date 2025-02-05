import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className=''>
      <div className='container max-w-3xl'>
        <h2 className='title text-green-600'>
          Let&apos;s talk about your project
        </h2>
        <span className='mt-2 text-xs text-muted-foreground'>
          We help companies and individuals build out their digital presence.
        </span>
        <ContactForm />
      </div>
    </section>
  )
}
