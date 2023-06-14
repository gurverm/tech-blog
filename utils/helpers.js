module.exports = {
    formatTimestamp: (timestamp) => {
      const date = new Date(timestamp);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
  
      const formattedDateTime = date.toLocaleString('en-US', options);
      return formattedDateTime;
    },
  };