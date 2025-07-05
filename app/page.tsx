"use client";

import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Input } from "@/components/ui/input";
import {createBlog} from "@/app/actions"
import {useOrganization} from "@clerk/nextjs"


export default function Home() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");


  const  selectedOrganisation=useOrganization();

  console.log(selectedOrganisation)
  

    const handleCreatedBlog=async()=>{
      if(!selectedOrganisation.organization?.id) return
     await createBlog({
       body:blogContent.trim(),
      ordId:selectedOrganisation.organization?.id,
      title: blogTitle
      
     })
    };


  return (
    <main>
      <Nav />
      <div className="p-10">
        <Input
        placeholder="Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <Textarea
          placeholder="Enter your blog content here"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <Button onClick={handleCreatedBlog} className="mt-2">Create Blog</Button>
      </div>
    </main>
  );
}
