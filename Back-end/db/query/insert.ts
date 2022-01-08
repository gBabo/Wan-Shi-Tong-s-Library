const insertUser = 'INSERT INTO users (email, name, institution, credits, rating) VALUES ($1, $2, $3, 0, 0);';

const insertPushNotification = 'UPDATE users SET push_notification_token=$1 WHERE email=$2';

const insertStudyM = `INSERT INTO study_material(name, description, author, type, price, likes, date)
                             VALUES ($1, $2, $3, $4, $5, 0, $6)RETURNING *;`;

const insertPathToStudyM = 'UPDATE study_material SET path=$1 WHERE study_id=$2';

const insertStudyMCategory = 'INSERT INTO study_material_category (category, study_id) VALUES ($1, $2);';

const insertStudyMReview = `INSERT INTO study_material_review (author, study_id, review, likes, date)
    VALUES ($1, $2, $3, 0, $4) RETURNING *;`;

const insertStudyMReviewComment = `INSERT INTO study_material_review_comment
    (review_id, author, comment, date)VALUES ($1, $2, $3, $4)RETURNING *;`;

const insertUserCredit = 'UPDATE users SET credits=credits+$1 WHERE email=$2;';

const insertAcquireStudyM = ' INSERT INTO study_material_acquired (study_id, "user") VALUES ($1, $2);';

const insertLikeStudyM = [
  ' INSERT INTO study_material_likes ("user", study_id) VALUES ($1, $2)',
  ' UPDATE study_material SET likes=(likes+1) WHERE study_id=$1;'];

const insertLikeStudyMReview = [
  ' INSERT INTO study_material_review_likes ("user", review_id) VALUES ($1, $2)',
  ' UPDATE study_material_review SET likes=likes+1 WHERE review_id=$1;'];

const insertStudyMaterialExchangeRequest = `INSERT INTO study_material_exchange_requests
    (requester, requestee, study_id_requester, study_id_requestee, date) VALUES ($1, $2, $3, $4, $5) RETURNING *;;`;

const insert = {
  insertUser,
  insertPushNotificationSQL: insertPushNotification,
  insertStudyM,
  insertPathToStudyM,
  insertStudyMCategory,
  insertStudyMReviewComment,
  insertStudyMReview,
  insertUserCredit,
  insertAcquireStudyM,
  insertLikeStudyM,
  insertLikeStudyMReview,
  insertStudyMExchangeR: insertStudyMaterialExchangeRequest,
};

export default insert;
