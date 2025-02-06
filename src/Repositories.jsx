import { useEffect, useState } from "react"
 
function RepoPreview ( { repo } ) {
    return (
      <div>
      <article key={repo.id}>  
      <h3>{repo.description}</h3>
      <p>{repo.language} // <a href={repo.html_url}>View on Github</a></p>
      </article>
      </div>
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