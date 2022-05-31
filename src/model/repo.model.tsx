export interface Repo {
    id: number,
    name: string,
    description: string,
    watchers_count:number,
    language:string,
    open_issues:number,
    private:boolean,
  }
  
  export interface RepoList {
    repo: Repo[],
    loading: string,
  }