import useScrollProgressBar from "hooks/useScrollProgressBar";
import DefaultLayout from "layout/DefaultLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const testReducer = useSelector((state) => state.testReducer);
  const { isFetching, listTodos } = testReducer;

  const { t } = useTranslation();

  useScrollProgressBar();
  //   useEffect(() => {
  //     dispatch(testAction());
  //   }, []);

  return (
    <DefaultLayout>
      {/* <div className="homepage">
				<img src="/static/assets/welcome.gif" />
				<hr />
				<h4>Example for get List todos by Redux-Hooks-Saga

					{t('button:save')}
				</h4>
				{listTodos.slice(0, 50).map(todo => <Todo key={todo.id} item={todo} />)}
			</div> */}
    </DefaultLayout>
  );
}
