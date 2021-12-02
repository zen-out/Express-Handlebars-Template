 let setProblem2 = Handlebars.compile(`{{#each problem}}<div id='problem-{{id}}' data-id={{id}} data-user_id='{{user_id}}' data-hourglass_id='{{hourglass_id}}' class='each_problem'><br/>
 <span class='noDisplay' name='{{id}}'></span><br/>
 <span class='noDisplay' name='{{user_id}}'></span><br/>
 <span class='noDisplay' name='{{hourglass_id}}'></span><br/>
 <span class='each_problem_problem_span'>{{problem}}</span><br/>
 <span class='each_problem_whatshouldbe_span'>{{whatshouldbe}}</span><br/>
 <span class='each_problem_whatactuallyis_span'>{{whatactuallyis}}</span><br/>
 <span class='each_problem_hypothesis_span'>{{hypothesis}}</span><br/>
 <span class='each_problem_plan_span'>{{plan}}</span><br/>
 <span class='each_problem_created_span'>{{created}}</span><br/>
 <span class='each_problem_email_span'>{{email}}</span><br/>
 <span class='each_problem_public_span'>{{public}}</span><br/>
 <span class='each_problem_status_span'>{{status}}</span><br/>
 <span class='each_problem_importance_span'>{{importance}}</span><br/>
 <span class='each_problem_difficulty_span'>{{difficulty}}</span><br/>
 <span class='each_problem_start_span'>{{start}}</span><br/>
 <span class='each_problem_edit_span'>{{edit}}</span><br/>
 <span class='each_problem_end_span'>{{end}}</span><br/>
 <button class='each_edit_problem_btn' type='submit' data-id='{{id}}' data-user_id='{{user_id}}' data-hourglass_id='{{hourglass_id}}'>edit</button><br/>
 <button type='submit' class='each_delete_problem_btn' data-id='{{id}}' data-user_id='{{user_id}}' data-hourglass_id='{{hourglass_id}}'>delete</button><br/>
 {{/each}}`)