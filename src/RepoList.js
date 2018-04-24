import React from "react";
import RepoTitle from "./RepoTitle";
import RepoOwner from "./RepoOwner";
import RepoLink from "./RepoLink";
import RepoStars from "./RepoStars";
import LangList from "./LangList";

const URL = "https://api.github.com/search/repositories?q=language:";
const DEFAULTLANG = "javascript";

class RepoList extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  clickHandler = e => {
    e.preventDefault();
    let text = e.target.innerText;
    this.fetchRepo(text);
  };

  fetchRepo(lang) {
    fetch(URL + lang)
      .then(data => data.json())
      .then(data => this.setState({ repos: data["items"] }));
  }

  componentDidMount() {
    fetch(URL + DEFAULTLANG)
      .then(data => data.json())
      .then(data => this.setState({ repos: data["items"] }));
  }

  render() {
    return (
      <div>
        <LangList
          langs={["javascript", "ruby", "java", "c"]}
          parent={this}
          click={this.clickHandler}
        />

        {this.state.repos.map(r => {
          return (
            <div>
              <RepoTitle name={r.name} />
              <RepoStars stars={r.stargazers_count} />
              <RepoOwner name={r.owner.login} avatar={r.owner.avatar_url} />
              <RepoLink name={r.full_name} link={r.html_url} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default RepoList;
