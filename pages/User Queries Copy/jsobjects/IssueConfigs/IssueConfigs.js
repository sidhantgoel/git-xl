export default {
	issueTypes: {
		"All": "",
		"Feature": "🧩",
		"Bug": "🐞",
		"Question": "❓",
		"Troubleshooting": "🧰",
		"Suggestion": "🙋🏻‍♀️",
	},
	podOptions: ["All", "App Viewers Pod", "UI Builders Pod", "Team Managers Pod", "FE Coders Pod", "BE Coders Pod", "New Developers Pod"],
	actionItems: {
		"Needs Documentation": "📑❗️",
		"Documented": "📑",
		"Needs App": "💻❗️",
		"App Built": "💻",
		"Needs Product": "🧩❗️",
		"Product Solved": "🧩",
		"Needs JS Snippet": "📜❗️",
		"JS Snippet Added": "📜",
		"Add to How to do X": "🤔❗️",
		"Added to How to do X": "🤔",
		"Add to Forum": "📖❗️",
		"Added to Forum": "📖",
	},
	sortOptions:{
		"GITHUB": "Most Github Votes",
		"VOTES": "Most Upvotes",
		"COMMENTORS": "Most Commentors",
		"RECENT": "Most Recent",
	},
	priorityOptions: {
		"None": "#ffffff",
		"Deprioritized": "#f0f0f0",
		"Low": "#fff199",
		"High": "##ffd182",
		"Critical": "#ffb2a8",
		"Released": "#d4ffbf",
	},
	upvoteStatus: {
		"Idle": "Idle",
		"New": "New",
		"🤷‍♀️ ⌛️": "Pending on User 🤷‍♀️ ⌛️",
		"🦸‍♀️ ⌛️": "Pending on Aforce 🦸‍♀️ ⌛️",
		"Github Issue": "Github Issue",
		"Dev Inprogress": "Dev Inprogress",
		"✅": "Resolved ✅",
		"Workaround": "Workaround",
		"None": "None",
		"🧊": "Cold thread 🧊",
	},
	platforms: {
		INTERCOM: 'https://cdn.worldvectorlogo.com/logos/intercom-2.svg',
		DISCORD: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg',
		GITHUB: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
		APPSMITH_FORUM: 'https://i.ibb.co/7jhmdvh/Group-8554.png',
		OTHERS: 'https://cdn.worldvectorlogo.com/logos/roadrunner.svg'
	},
	getTypeFilterOptions: () => Object.keys(this.issueTypes).map(t => ({ label: t + `${this.issueTypes[t] ? ' ' + this.issueTypes[t] : ''}`, value: t })),
	getPodFilterOptions: () => this.podOptions.map(p => ({ label: p, value: p})),
	getActionItemFilterOptions: () => Object.keys(this.actionItems).map(a => ({ label: a + `\t${this.actionItems[a]}`, value: a})),
	getSortOptions: () => Object.keys(this.sortOptions).map(s => ({ label: this.sortOptions[s], value: s })),
	getPriorityOptions: () => Object.keys(this.priorityOptions).map(p => ({ label: p, value: p })),
	getUpvoteStatusOptions: () => Object.keys(this.upvoteStatus).map(p => ({ label: this.upvoteStatus[p], value: p })),
}