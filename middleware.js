const REDIRECT_HOSTS = new Set(['vivirsinproposito.com', 'www.vivirsinproposito.com'])
const DESTINATION = 'https://www.malaveautor.com/vivir-sin-proposito'

export default function middleware(request) {
  const host = request.headers.get('host') || ''

  if (REDIRECT_HOSTS.has(host)) {
    return Response.redirect(DESTINATION, 308)
  }
}
