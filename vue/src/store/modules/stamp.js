import Cookies from "js-cookie";
import Stamps from "@/stamps";

export default {
  namespaced: true,
  mutations: {
    // スタンプ取得時の処理
    getStamp(state, { hash, ga }) {
      const getHash = this.state.Stamp.hash.find((item) => item.hash === hash);
      if (getHash && Boolean(!getHash.status)) {
        // Cookies.set("stamp_" + getHash.name, 1);
        Cookies.set(getHash.name, 1);
        getHash.status = true;
        this.state.Stamp.done
          ? Cookies.set("done", Number(this.state.Stamp.done) + 1)
          : Cookies.set("done", 1);
        this.state.Stamp.done = Cookies.get("done");
        if (this.state.Stamp.done >= this.state.Stamp.hash.length) {
          this.state.Stamp.completed = true;
          ga.event("スタンプ", "全部", "", 1);
        }
        ga.event("スタンプ", getHash.name, "", 1);
      }
    },
  },
  state: {
    // スタンプ取得数
    done: Cookies.get("done"),
    // 達成したか
    completed: false,
    // スタンプ
    hash: Stamps(),
    // 分割数
    split_cnt: 3,
  },
};
