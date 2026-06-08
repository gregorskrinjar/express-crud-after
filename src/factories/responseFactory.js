function success(data, message = 'Request completed successfully') {
  return {
    success: true,
    message,
    data
  };
}

function created(data, message = 'Resource created successfully') {
  return success(data, message);
}

function deleted(message = 'Resource deleted successfully') {
  return {
    success: true,
    message
  };
}

module.exports = {
  success,
  created,
  deleted
};
