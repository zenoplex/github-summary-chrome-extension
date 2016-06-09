export const formatters = [];
class GithubSummaryFormatter {

  constructor(property, description) {
    this.property = property;
    this.description = description;

    formatters.push(this);
  }
}

export const REPO = new GithubSummaryFormatter('{repo}', 'Name of the Repository');
export const USERNAME = new GithubSummaryFormatter('{username}', 'User who created PR or issue');
export const AVATAR = new GithubSummaryFormatter(
  '{avatar}', 'Img element containing user avatar. Size is fixed to 18px'
);
export const TITLE = new GithubSummaryFormatter('{title}', 'Title of issue or pull request');
export const CHECKBOX = new GithubSummaryFormatter('{checkbox}', 'Checkbox depending on flag');
export const FLAG = new GithubSummaryFormatter('{flag}',
  `<span>
<code>mergedTag</code> or 
<code>closedTag</code>to display depending on issue state or merged flag
</span>`
);
