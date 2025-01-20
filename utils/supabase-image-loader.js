"use server"
const projectId = 'qpoqctnndisltuacsudq'

export default async function supabaseLoader({ src, width, quality }) {
    return `https://${projectId}.supabase.co/storage/v1/render/image/public/${src}&width=${width}&quality=${quality || 75}`
}
