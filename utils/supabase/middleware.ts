import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // refreshing the auth token
  const { data: { user } } = await supabase.auth.getUser()

  // Define protected routes that require a logged in user
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/profile') || 
                           request.nextUrl.pathname.startsWith('/play') ||
                           request.nextUrl.pathname.startsWith('/leaderboard');

  if (isProtectedRoute && !user) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('message', 'Vous devez être connecté et avoir confirmé votre email pour y accéder.')
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect logged-in users away from the login page
  if (request.nextUrl.pathname === '/login' && user) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/profile'
    return NextResponse.redirect(redirectUrl)
  }

  return supabaseResponse
}
