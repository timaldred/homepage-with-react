import { useEffect, useState } from "react"
 
function RepoPreview ( { repo } ) {
    return (
      <div>
      <article key={repo.id}>  
      <h3>{repo.description}</h3>
      <p>{repo.language} // <a href={repo.html_url}>View on Github</a></p>
      </article>
      </div>



 /*          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
             
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {repo.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{repo.description}</p>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">By user #{repo.language}</p>
                  
                </div>
              </article>
            
          </div>

          */
    )
  }

    export default function Repositories() {
  
      const [repo, setRepos] = useState([])
  
      function getRepos(){
          fetch("https://api.github.com/users/timaldred/repos")
          .then(res => res.json())
          .then(data => setRepos(data))
      }
  
      useEffect(()=>{
          getRepos()
      }, [])
  
      return (
        <div>
          <h2> My projects</h2>  
              {repo.map((repo) => ( <RepoPreview key={repo.id} repo={repo} /> ))}
          <div class="white-line"></div>  
        </div>
      )

    }