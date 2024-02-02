export default function Analytics() {
  const GA_KEY = import.meta.env.VITE_GA_KEY

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_KEY}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_KEY}');
                `,
        }}
      ></script>
    </>
  )
}
