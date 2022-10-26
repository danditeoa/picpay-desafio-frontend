import { useAtom } from "jotai"
import { Task } from "../models/Task.model"
import type { GetServerSideProps, NextPage } from "next"
import { SetStateAction, useEffect, useMemo, useState } from "react"
import { isUserLoggedAtom } from "../atoms/login.atom"
import Layout from "../components/Layout/Layout"
import styles from './index.module.scss';
import Pagination from "../components/Pagination/Pagination"
import Header from "../components/Header/Header"

type Props = {
  tasks: Task[]
}
let PageSize = 10;

const Payments: NextPage<Props> = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tasks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
console.log({tasks});
  return (
    <Layout>
      <Header />

      <h1 className={styles.title}>Meus pagamentos</h1>
      <main className={styles.content}>
        <Pagination
          className={styles.paginationBar}
          currentPage={currentPage}
          totalCount={tasks.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Nome</th>
              <th>Título</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map(item => {
              return (
                <tr className={styles.tableItem}>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.value}</td>
                  <td><input type = "checkbox" id = "isPayed" name = "payment" checked="`${item.isPayed}`"></input></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const tasks = await fetch("http://localhost:4000/tasks").then((response) =>
   response.json()
  )
  console.log(tasks)
  return {
    props: { tasks },
  }
}

export default Payments
