'use server'

import { blogTable, CreateBlogType } from "@/db/schema"
import {db} from "@/db"

 
export const createBlog=async(payload:CreateBlogType)=>{
    await db.insert(blogTable).values(payload)
    
}