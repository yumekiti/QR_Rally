import Cookies from "js-cookie";
import Stamps from "@/stamps";

export default {
  namespaced: true,
  mutations: {
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
    done: Cookies.get("done"),
    completed: false,
    hash: Stamps(),
  },
};
